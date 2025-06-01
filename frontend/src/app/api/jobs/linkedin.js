import axios from 'axios';

export const fetchLinkedInJobs = async (jobType, page = 0, limit = 25, keyword = 'software engineer') => {
  try {
    const response = await axios.get(`/api/jobs?type=${jobType}&page=${page}&limit=${limit}&keyword=${encodeURIComponent(keyword)}`);
    return response.data;
  } catch (error) {
    console.error('[LinkedIn API Service] Error fetching jobs:', error);
    throw error;
  }
};

// The individual fetch functions will now just call the main one with the type
export const fetchOnsiteJobs = async (page = 0, limit = 25, keyword = 'software engineer') => fetchLinkedInJobs('onsite', page, limit, keyword);
export const fetchInternJobs = async (page = 0, limit = 25, keyword = 'software engineer') => fetchLinkedInJobs('intern', page, limit, keyword);
export const fetchRemoteJobs = async (page = 0, limit = 25, keyword = 'software engineer') => fetchLinkedInJobs('remote', page, limit, keyword); 