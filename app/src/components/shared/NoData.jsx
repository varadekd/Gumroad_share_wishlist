export const NoData = (message) => {
    return (
        <div className="flex items-center justify-center">
            { message ? (
                <p>{message}</p>
            ) : (
                <p> Data not available. </p>
            )

            }
        </div>
    )
}