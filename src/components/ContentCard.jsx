
export default function ContentCard({ content, seeDetail }) {
    const truncateText = (text, maxLength = 100) => {
        if (!text) return ''
        if (text.length <= maxLength) return text

        // Find the last space before maxLength to avoid cutting words
        const truncated = text.substring(0, maxLength)
        const lastSpace = truncated.lastIndexOf(' ')

        if (lastSpace > 0) {
            return truncated.substring(0, lastSpace) + '...'
        }

        return truncated + '...'
    }

    return (

        <div className="content-card" onClick={seeDetail} style={{ cursor: 'pointer' }}>
            <img className="contentImg" src={content.primaryImage}></img>
            <h3>{content.primaryTitle}</h3>
            <span>{truncateText(content.description, 100)}</span>
        </div>

    )
}