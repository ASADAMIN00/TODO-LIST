document.querySelector('#push').onclick = 
      function () {
        if (document.querySelector('.user-inp').
            value.length == 0) {
            alert("Please Enter a Task");
        }
        else {
            document.querySelector('#tasks').innerHTML
             += `<div class='task'><span id='taskname'>${document.querySelector('.user-inp').value}</span><button class='delete'>X</button></div>`;
             console.log('#newwork input');
            var current_tasks = document.querySelectorAll('.delete');

            for (var i = 0; i < current_tasks.length; i++) {
                current_tasks[i].onclick = function () {
                    this.parentNode.remove();
                }
            }

            var tasks = document.querySelectorAll('#taskname');

            for (var i = 0; i < tasks.length; i++) {
               tasks[i].onclick = function () {
                    this.classList.toggle('completed');
                }
            }

            document.querySelector('#newwork input').value = "";
        }

    }