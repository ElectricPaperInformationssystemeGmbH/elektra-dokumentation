import React from 'react';
// Standard-MDX-Komponenten von Docusaurus übernehmen ...
import MDXComponents from '@theme-original/MDXComponents';
// ... und eigene Komponenten global verfügbar machen (ohne import in den .md-Dateien).
import Vimeo from '@site/src/components/Vimeo';
// Karten-Liste der Unterbereiche (für Kapitel-Übersichtsseiten)
import DocCardList from '@theme/DocCardList';

export default {
  ...MDXComponents,
  Vimeo,
  DocCardList,
};
