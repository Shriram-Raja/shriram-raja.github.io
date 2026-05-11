{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    ruby
    bundler
    nodejs
    # For native gem compilation
    pkg-config
    libffi
    zlib
    libyaml
    openssl
  ];

  shellHook = ''
    export GEM_HOME="$PWD/.gems"
    export PATH="$GEM_HOME/bin:$PATH"
    export BUNDLE_PATH="$GEM_HOME"
  '';
}
