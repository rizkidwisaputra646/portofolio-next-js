import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

const components = {
  h1: (props: any) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4" />,
  h2: (props: any) => <h2 {...props} className="text-2xl font-bold mt-8 mb-4 border-b pb-2" />,
  h3: (props: any) => <h3 {...props} className="text-xl font-bold mt-6 mb-3" />,
  p: (props: any) => <p {...props} className="text-muted-foreground leading-relaxed mb-6" />,
  ul: (props: any) => <ul {...props} className="list-disc list-inside mb-6 space-y-2 text-muted-foreground" />,
  ol: (props: any) => <ol {...props} className="list-decimal list-inside mb-6 space-y-2 text-muted-foreground" />,
  li: (props: any) => <li {...props} className="ml-4" />,
  code: (props: any) => <code {...props} className="bg-accent px-1.5 py-0.5 rounded text-sm font-mono" />,
  pre: (props: any) => <pre {...props} className="p-4 rounded-2xl bg-slate-950 overflow-x-auto mb-6 border border-white/10" />,
  blockquote: (props: any) => <blockquote {...props} className="border-l-4 border-indigo-500 pl-4 italic text-muted-foreground mb-6" />,
};

const options = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: false,
        },
      ],
    ],
  },
};

export function MdxRenderer({ source }: { source: string }) {
  return (
    <div className="mdx-content">
      <MDXRemote source={source} components={components} options={options as any} />
    </div>
  );
}
