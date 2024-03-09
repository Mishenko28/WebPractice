export default function DeleteCon({ setDeleteConTog }) {
    return (
        <div className="delete-confirmation-bg">
            <div className="delete-confirmation">
                <h1>Are you sure you want to delete?</h1>
                <div className="btns">
                    <button>Delete</button>
                    <button onClick={() => setDeleteConTog(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}