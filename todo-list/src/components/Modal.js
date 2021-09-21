import React from 'react'

export const Modal = () => {
    return (
        <div id="modal1" class="modal">
            <div class="modal-content">
                <h4>Actualizar</h4>
                <input type="text" name="newTitle" placeholder="Actualizar Tarea"></input>
            </div>
            <div class="modal-footer">
                <a href="#!" id="updateBtn" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
    )
}
