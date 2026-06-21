import { Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
export const ResumeContainer = ({
    title,
    url
}:{
    title: string,
    url: string
}) => {
    return (
        <Suspense fallback={<div className="w-[100px] aspect-square rounded-full bg-gray-50 dark:bg-gray-900 overflow-hidden border-t-2 border-b-2 border-l-0 border-r-0 border-gray-200 dark:border-gray-700 animate-spin"/>}>
            <div className="relative w-full h-[80vh] bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="absolute top-0 left-0 right-0 bg-white dark:bg-gray-800 px-4 py-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 z-10">
                    <span className="text-sm font-medium">{title}</span>
                    <div className="flex items-center gap-2">
                    <Link
                        href={url} 
                        download={`${title.replace(/\s+/g, '_')}.pdf`}
                        className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                        title="Download PDF"
                    >
                        <Download className="w-5 h-5" />
                    </Link>
                    <Link 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                        title="Open in new tab"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </Link>
                    </div>
                </div>
                <iframe
                    src={`${url}#view=fitH`} 
                    className="w-full h-full pt-12"
                    title={`${title} PDF`}
                />
            </div>
        </Suspense>
    )
}