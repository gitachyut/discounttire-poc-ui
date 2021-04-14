import useCategories from '../../gql-hooks/useCategories/useCategories';
import CategoryBar from '../category-bar/category-bar';

export default function Categories() {
    const { error, data, loading } = useCategories();

    return (
        <>
        {
            loading &&
            <i> Loading....</i>
        }
        { 
            !loading && 
            <CategoryBar categories={data.Categories} />
        }
        {
            error && <span style={{ color: "red"}}> Something went wrong!</span>
        }
        </>
    )
}