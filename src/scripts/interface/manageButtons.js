document.addEventListener('DOMContentLoaded', () => {
    const tasksContainer = document.querySelector('.tasks');

    tasksContainer.addEventListener('click', (event) => {
        const wrapper = event.target.closest('.task-wrapper');

        if (wrapper) {
            const task = wrapper.closest('.task');

            if (task.classList.contains('expanded')) {
                task.classList.remove('expanded');
            } else {
                document.querySelectorAll('.task.expanded').forEach(openTask => {
                    openTask.classList.remove('expanded');
                });

                task.classList.add('expanded');
            }
        }
    });
});