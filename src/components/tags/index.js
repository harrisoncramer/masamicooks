import React from 'react'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <small>
      {tags.map((tag) => (
        <div className="inline-block py-1 px-2 mr-1 mb-1 bg-app-gray rounded-sm" key={tag}>
          {tag}
        </div>
      ))}
    </small>
  )

export default Tags
