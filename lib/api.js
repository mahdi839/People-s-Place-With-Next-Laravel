export async function getData(endpoint) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  try {
      const response = await fetch(`${baseUrl}/${endpoint}`, {
          cache: 'no-store', // Add this to disable caching
          headers: {
              'Content-Type': 'application/json',
          }
      });
      return await response.json();
  } catch (error) {
      console.error("Error fetching data:", error);
      return null;
  }
}