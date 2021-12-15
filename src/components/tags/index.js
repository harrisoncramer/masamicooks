import React from 'react'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <small>
      {tags.map((tag) => (
        <div key={tag}>
          {tag}
        </div>
      ))}
    </small>
  )

export default Tags
