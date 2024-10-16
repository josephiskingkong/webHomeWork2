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

export async function addTaskToDB(title, description) {
    try {
        const body = {
            title: title,
            description: description
        };

        let response = await fetch(`${ENDPOINT}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error('Error while adding task');
        }

        const createdTask = await response.json();
        return createdTask;
    } catch (error) {
        console.error('Error:', error);
        alert('Error');
        return null;
    }
}

export async function deleteTask(id) {
    try {
        const body = {
            id: id
        };

        let response = await fetch(`${ENDPOINT}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error('Error while adding task');
        }

        return;
    } catch (error) {
        console.error('Error:', error);
        alert('Error');
        return null;
    }
}

export async function updateTask(id, title, description) {
    try {
        const body = {
            id: id,
            title: title,
            description: description
        };

        let response = await fetch(`${ENDPOINT}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error('Error while adding task');
        }

        return;
    } catch (error) {
        console.error('Error:', error);
        alert('Error');
        return null;
    }
}