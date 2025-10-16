const QuillContent = ({ content }: { content: string }) => {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="prose lg:prose-xl mx-auto"
        />
    );
};

export default QuillContent;