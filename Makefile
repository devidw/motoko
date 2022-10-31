netlify-state:
		mkdir -p ./apps/site/.netlify
		if [ ! -z ${NETLIFY_SITE_ID} ]; then echo '{'"\"site\":\"${NETLIFY_SITE_ID}\""'}' > ./apps/site/.netlify/state.json; fi
		
build:
		pnpm nx run-many --target=build --projects=site

deploy: netlify-state build
		pnpm nx run site:deploy