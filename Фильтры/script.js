function addColor3(){
    $("tr:even").css("background-color", "grey"); //выбирает четные элементы, начиная с нуля.
    $("tr:odd").css("background-color", "blue"); //выбирает нечетные элементы, начиная с нуля.
    $("td:gt(5)").css("color", "yellow"); //выбирает элементы с индексом больше указанного.
    $("td:eq(3)").css("color", "red"); //выбирает элемент по его индексу (начиная с нуля).
    $("td:lt(2)").css("color", "white"); //выбирает элементы с индексом меньше указанного.
}
