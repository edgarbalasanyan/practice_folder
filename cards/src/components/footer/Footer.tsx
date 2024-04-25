import "./Footer.css"
const Footer = ({onLoadMore}:{onLoadMore:()=>void}) => {
  return (
    <div className="footer">
      <button onClick={onLoadMore}>Load More</button>
    </div>
  )
}

export default Footer