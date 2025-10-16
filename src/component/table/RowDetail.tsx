import { News } from "@/services/news";
import { formatDate } from "@/utils/convert-date";
import Image from "next/image";
import Link from "next/link";

export default function RowDetailView({ news }: { news: News }) {
  return (
    <div className="flex h-40 gap-4 p-2 border border-slate-200">
      <div className="w-40 h-28">
        {news.image && (
          <Image src={news.image} alt="" height={200} width={400} className="object-cover object-center" />
        )}
      </div>
      <div className="w-1/2 flex gap-2 text-nowrap">
        <div>
          <p>Category</p>
          <p>Title</p>
          <p>Description</p>
          <p>Date News</p>
          <Link href={`/admin/news/${news.id}`} className="text-toska mr-2 hover:text-toska-dark font-semibold hover:font-bold">
            Manage
          </Link>
          <Link href={`/news/${news.slug}`} className="text-toska mx-2 hover:text-toska-dark font-semibold hover:font-bold">
            Preview
          </Link>
        </div>
        <div>
          <p>: {news.category}</p>
          <p>: {news.title}</p>
          <p>: {news.description}</p>
          <p>: {formatDate(news.date)}</p>
        </div>
      </div>
    </div>

  );
}
