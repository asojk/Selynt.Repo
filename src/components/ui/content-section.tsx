import React, {ReactNode} from 'react'

interface ContentSectionProps {
  title: string
  subtitle?: string
  description?: string
  button?: {
    text: string
    onClick: () => void
  }
  customContent?: ReactNode
  className?: string
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  description,
  button,
  customContent,
  className = '',
}) => {
  return (
    <section className={`antialiased lg:subpixel-antialiased w-full ${className}`}>
      <div className="space-y-4">
        <h2 className="H2 mb-4">
          {title}
        </h2>
        {subtitle && (
          <h3 className='H3 mb-2'>
            {subtitle}
          </h3>
        )}
        {description && (
          <p className='Description mb-4'>{description}</p>
        )}
        {button && (
          <button
            onClick={button.onClick}
            className='inline-block rounded-lg bg-indigo-600 px-md py-sm font-medium text-white shadow-md transition duration-150 hover:bg-indigo-500 hover:shadow-none active:bg-indigo-700'>
            {button.text}
          </button>
        )}
      </div>
      {customContent && <div className='mt-lg'>{customContent}</div>}
    </section>
  )
}

export default ContentSection