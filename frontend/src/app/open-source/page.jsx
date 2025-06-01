// Remove dynamic export since we're doing static export
export const dynamic = 'force-static'

// Import the new client wrapper component
import OpenSourcePageClientWrapper from '../../components/OpenSourcePageClientWrapper';

// Define the OpenSource component as a Server Component
const OpenSourcePage = () => {
  return (
    // Render the client wrapper component
    <OpenSourcePageClientWrapper />
  );
};

export default OpenSourcePage; 