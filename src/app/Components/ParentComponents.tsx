import ChildComponent from "./ChildComponents"

const ParentComponent = () => {
    let name = "counter timer"

    return (
        <div className="mt-10 hover:shadow-lg p-4 transition duration-300">
        
            <ChildComponent name={name} />
        </div>
    )
}

export default ParentComponent