import Avatar from "./avatar"
import DateFormatter from "./date-formatter"
import CoverImage from "./cover-image"
import Link from "next/link"
import Author from "../types/author"
import Blob from "./blob/blob.component"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="preview relative">
      <Blob />
      <div className="mb-5 relative z-10">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug relative z-10">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 relative">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 relative">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default PostPreview
