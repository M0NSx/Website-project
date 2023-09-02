// Português
$(".br").click(function () {
    // Header
    $("#nav ul li:nth-child(1) a").html('<i class="bi bi-book" aria-hidden="true"></i> Sobre');
    $("#nav ul li:nth-child(2) a").html('<i class="bi bi-plus-square" aria-hidden="true"></i> Criar Seu Combo');
    $("#nav ul li:nth-child(3) a").html('<i class="bi bi-journals" aria-hidden="true"></i> Ver Combo');
    $("#nav ul li:nth-child(4) a").html('<i class="bi bi-people" aria-hidden="true"></i> Comunidade');
    $("#nav ul li:nth-child(5) a").html('<i class="bi bi-card-text" aria-hidden="true"></i> Página Principal');
    $("#logout").html('<i class="bi bi-door-open" aria-hidden="true"></i> Sair');
    // About
    $("#introduction").text('Aqui você pode criar combos para si mesmo e compartilhá-los com pessoas e também, com uma comunidade, você pode procurar por combos e ideias interessantes, então certifique-se de acompanhar os novos combos!');
    // Things to Toggle
    $(".language-selected").text("pt-BR");
    $(".language-selected").removeClass("change-en change-fr change-kr");
    $(".language-selected").addClass("change-br");

});

// English
$(".en").click(function () {
    // Header
    $("#nav ul li:nth-child(1) a").html('<i class="bi bi-book" aria-hidden="true"></i> About');
    $("#nav ul li:nth-child(2) a").html('<i class="bi bi-plus-square" aria-hidden="true"></i> Create Your Combo');
    $("#nav ul li:nth-child(3) a").html('<i class="bi bi-journals" aria-hidden="true"></i> View Combo');
    $("#nav ul li:nth-child(4) a").html('<i class="bi bi-people" aria-hidden="true"></i> Community');
    $("#nav ul li:nth-child(5) a").html('<i class="bi bi-card-text" aria-hidden="true"></i> Main Page');
    $("#logout").html('<i class="bi bi-door-open" aria-hidden="true"></i> Log Out');
    //About
    $("#introduction").text('Here you can create combos for yourself and share it with peoples and also, with a community, you can look for interesting combos and ideas, therefore make sure to keep up with new combos!');
    // Things to Toggle
