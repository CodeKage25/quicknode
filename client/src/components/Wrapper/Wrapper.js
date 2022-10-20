const Wrapper = (props) => {

    document.title = 'Food Application - ' + props.title;
    return <div className="w-100">
        {props.children}
    </div>
}

export default Wrapper;