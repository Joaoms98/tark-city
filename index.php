<h1>Minha Cidade</h1>

<p>População: <?= $city->population ?></p>
<p>Empregos: <?= $city->jobs ?></p>
<p>Dinheiro: R$ <?= $city->money ?></p>

<form action="engine.php" method="POST">
    <button name="action" value="nextDay">Dia Seguinte</button>
    <button name="action" value="buildHouse">Construir Casa (100)</button>
    <button name="action" value="buildFactory">Construir Fábrica (200)</button>
</form>