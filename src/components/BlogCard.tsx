import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

// import { Skeleton } from "@/components/ui/skeleton";

export default function BlogCard({
  title,
  description,

  author,
  date,
}: any) {
  return (
    <>
      <Card className="w-full max-w-md rounded-2xl shadow-lg overflow-hidden bg-white group transition-all duration-500 hover:scale-[1.03] hover:shadow-xl">
        <CardHeader>
          <h2 className="text-xl font-semibold text-gray-900 capitalize">
            {title}
          </h2>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-gray-700 text-sm line-clamp-3">{description}</p>

          <div className="flex items-center justify-between pt-2 border-t text-sm text-gray-600">
            <span>✍️ {author}</span>
            <span>📅{new Date(date).toLocaleDateString()}</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

// // Skeleton Loader
// export function BlogCardSkeleton() {
//   return (
//     <Card className="w-full max-w-md rounded-2xl shadow overflow-hidden bg-white">
//       <div className="relative w-full h-56">
//         <Skeleton className="w-full h-full" />
//       </div>

//       <CardHeader>
//         <Skeleton className="h-6 w-3/4" />
//       </CardHeader>

//       <CardContent className="space-y-3">
//         <Skeleton className="h-4 w-full" />
//         <Skeleton className="h-4 w-5/6" />
//         <div className="flex items-center justify-between pt-2">
//           <Skeleton className="h-4 w-20" />
//           <Skeleton className="h-4 w-16" />
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
