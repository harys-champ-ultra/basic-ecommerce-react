import collectionList from "../data/collections"

function Collection() {
    return (
        <>
            <div className="wrap-box wrap-light">
                <div className="box-layer box-cut-bottom">
                    <div className="layer-content">
                        <h2>Explore Our Exclusive Collections</h2>
                        <p>Discover unique collections curated with the latest fashion trends. Each collection showcases a distinct style and brings out your individuality.</p>
                        <button>View All</button>
                    </div>
                </div>
                <div className="box-layer box-tetra box-cut-top">
                    {collectionList.slice(0, 4).map((collection) => (
                        <div key={collection.collection_id} className="layer-showcase">
                            <figure>
                                <img src={collection.collection_img} alt={collection.collection_name} />
                            </figure>
                            <div className="showcase-row">
                                <a href={`/${ collection.collection_name }`}>{collection.collection_name}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Collection