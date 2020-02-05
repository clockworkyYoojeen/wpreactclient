import React from 'react'

const Pagination = (props) =>  {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pageNumbers.push(i);
    }
        return (
            <div className="pagination-bar">
            <nav>
            <ul className="pagination justify-content-center">
            {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <span onClick={() => props.paginate(number)} className='page-link'>
                            {number}
                        </span>
                    </li>
                ))}
            {/* <li className="page-item"><a className="page-link active" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
            </ul>
            </nav>
            </div>
        )
}
export default Pagination
