function FeatureItem(props) {
    return (
        <div>
            {/* {console.log(props)} */}
            <p>icon: {props.data.icon}</p>
            <p>title:{props.data.title}</p>
            <p>descp:{props.data.description}</p>
        </div>
    )
}

export default FeatureItem;