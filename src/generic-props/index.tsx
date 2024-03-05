
type ListdataProps<T> = {
    items: T[],
    onClick: (value: T) => void
}
const ListData = <T extends {id:number,name:string}>({ items, onClick }: ListdataProps<T>) => {
    return (
        <>
            {items?.map((item) => (
                <div key={item.id}>
                    <button onClick={() => onClick(item)}>{item.name}</button>
                </div>
            ))}
        </>
    )
}
export default ListData