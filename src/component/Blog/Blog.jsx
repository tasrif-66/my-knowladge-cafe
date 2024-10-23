import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
  const { title,cover,author,author_img,post_date, reading_time,hash_tag } = blog;
  
  return (
    <div>
      <img className='' src={cover} alt={`cover picture of title ${title}`} />
      <div className='flex justify-between'>
        <div className='flex gap-5 m-3'>
          <img className='rounded-full w-14' src={author_img} alt="" />
            <div>
            <h3 className='text-2xl '>{author}</h3>
            <p>{ post_date}</p>
            </div>
        </div>
        <div>
          <span>{reading_time } min read</span> 
        </div>
      </div>
      <h2 className='text-4xl'>{title}</h2>
      <p><a href="">{ hash_tag}</a></p>
      
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;