let ele = document.getElementById("ele1");

        function paint(color = "green") {
            document.body.style.backgroundColor = color;
        }

        paint();

        ele.addEventListener("click", function () {
            paint("yellow");
        });