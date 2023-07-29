const ListPeople = () => {
    return (
        <div>
            <h2>Personas censadas</h2>
            <select class="form-select form-select-sm" aria-label="Small select example">
                <option selected disabled>Filtro por Ocupación</option>
                <option value="1">Todos</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <ul class="list-group">
                <li class="list-group-item">An item<button type="button" class="btn btn-danger">Eliminar</button></li>
                <li class="list-group-item">A second item<button type="button" class="btn btn-danger">Eliminar</button></li>
                <li class="list-group-item">A third item<button type="button" class="btn btn-danger">Eliminar</button></li>
                <li class="list-group-item">A fourth item<button type="button" class="btn btn-danger">Eliminar</button></li>
                <li class="list-group-item">And a fifth one<button type="button" class="btn btn-danger">Eliminar</button></li>
            </ul>

        </div>
    )
}

export default ListPeople;