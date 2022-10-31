build:
		pnpm nx run-many --target=build --projects=site

deploy: build
		pnpm nx run site:deploy