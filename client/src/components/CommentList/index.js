import React from "react";

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>

      <div className="container my-4" >
        <div className="row">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-sm-4 mb-3 pb-3">
              <div id="study-card" className="p-3 bg-info text-light">
                {/* <h5 className="card-header">
                  {comment.commentAuthor} commented{" "}
                  <span style={{ fontSize: "0.825rem" }}>
                    on {comment.createdAt}
                  </span>
                </h5> */}
                <h1 id="card-content" className="flex-column">{comment.commentText}</h1>
              </div>
            </div>
          ))}
          </div>
      </div>

    </>
  );
};

export default CommentList;
