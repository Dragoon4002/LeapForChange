import { FrogIcon } from '@/components/ui/frog-icon'

interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2">
        <FrogIcon className="text-green-500" size={32} />
        <h1 className="text-3xl font-bold text-green-800">{title}</h1>
      </div>
      {description && (
        <p className="mt-2 text-lg text-green-600">{description}</p>
      )}
    </div>
  )
}

