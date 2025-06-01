import { NextResponse } from 'next/server';
import linkedIn from 'linkedin-jobs-api';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const jobType = searchParams.get('type') || 'all';
  const page = parseInt(searchParams.get('page') || '0', 10); // Get page number, default to 0
  const limit = parseInt(searchParams.get('limit') || '25', 10); // Get limit, default to 25
  const keyword = searchParams.get('keyword') || 'software engineer'; // Get keyword, default to 'software engineer'

  const queryOptions = {
    keyword: keyword,
    location: 'United States', // You might want to make this dynamic later
    dateSincePosted: 'past Week',
    limit: limit.toString(),
    page: page.toString(),
  };

  // Adjust query options based on job type
  switch (jobType) {
    case 'onsite':
      queryOptions.remoteFilter = 'false'; // Assuming 'false' means not remote
      queryOptions.jobType = 'full time'; // Or other relevant types
      // You might need to adjust location more specifically for onsite
      break;
    case 'remote':
      queryOptions.remoteFilter = 'remote';
      queryOptions.jobType = 'full time'; // Or other relevant types
      break;
    case 'intern':
      queryOptions.jobType = 'internship';
      // Remove remoteFilter or set to 'false' if internships are typically not remote or can be mixed
      delete queryOptions.remoteFilter; // Or queryOptions.remoteFilter = 'false'; depending on desired behavior
      break;
    default:
      // For 'all' or unknown types, you might fetch a mix or remove filters
      delete queryOptions.remoteFilter;
      delete queryOptions.jobType;
      break;
  }

  try {
    console.log(`[API Route] Fetching jobs with options: ${JSON.stringify(queryOptions)}`);
    const response = await linkedIn.query(queryOptions);
    console.log(`[API Route] Fetched ${response.length} jobs for page ${page}.`);
    return NextResponse.json(response);
  } catch (error) {
    console.error('[API Route] Error fetching jobs:', error);
    return NextResponse.json({ message: 'Error fetching jobs' }, { status: 500 });
  }
} 