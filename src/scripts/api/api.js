const ENDPOINT = 'http://localhost:5001'

export async function fetchTasks() {
    try {
        const response = await fetch(`${ENDPOINT}/getTasks`);
        if (!response.ok) {
            throw new Error('Error while fetching tasks');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}