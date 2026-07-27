import React from 'react';
// Standard-MDX-Komponenten von Docusaurus übernehmen ...
import MDXComponents from '@theme-original/MDXComponents';
// ... und eigene Komponenten global verfügbar machen (ohne import in den .md-Dateien).
import Vimeo from '@site/src/components/Vimeo';

export default {
  ...MDXComponents,
  Vimeo,
};
