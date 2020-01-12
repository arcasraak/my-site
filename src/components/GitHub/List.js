import React from 'react';
import GitHubRepoCard from './RepoCard';
import { ThemeContext } from '../../layouts';

const GitHubList = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <React.Fragment>
          <section>
            <GitHubRepoCard
              title="react-isomorphic-data"
              description="Easily fetch json data in your React components, with similar APIs to react-apollo 🎉"
              url="https://github.com/jackyef/react-isomorphic-data"
            />
            <GitHubRepoCard
              title="rqrr-wasm"
              description="The rust QR decoder library `rqrr`; compiled to WebAssembly."
              url="https://github.com/jackyef/rqrr-wasm"
            />
            <GitHubRepoCard
              title="source-map-explorer-remote"
              description="Wrapper around source-map-explorer that works with remote URLs and chrome code coverage"
              url="https://github.com/jackyef/source-map-explorer-remote"
            />
            <GitHubRepoCard
              title="bundlewatch-gh-action"
              description="GitHub action that allows you to easily run bundlewatch in your repository 📦"
              url="https://github.com/jackyef/bundlewatch-gh-action"
            />
            <GitHubRepoCard
              title="bundle-calc"
              description="calculate bundle size of your next project!"
              url="https://github.com/jackyef/bundle-calc"
            />
          </section>

          <style jsx>{`
            section {
              display: block;
              padding: 0 ${theme.space.s};
              white-space: nowrap;
              overflow-x: scroll;
              scroll-snap-type: x mandatory;
              vertical-align: top;
            }
          `}</style>
        </React.Fragment>
      )}
    </ThemeContext.Consumer>
  );
};

export default GitHubList;
