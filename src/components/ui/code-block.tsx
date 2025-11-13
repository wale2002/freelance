// components/ui/code-block.tsx
import { useTheme } from "next-themes"; // If using next-themes; adjust as needed
import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  children: string;
  language?: string;
}

export function CodeBlock({ children, language }: CodeBlockProps) {
  const { theme } = useTheme();
  return (
    <Highlight theme={themes.github} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}