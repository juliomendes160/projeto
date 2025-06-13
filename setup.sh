echo projeto setup.sh

FERRAMENTAS(){
	node_url="https://nodejs.org/dist/v16.16.0/node-v16.16.0-x64.msi"
	node_filename="$(basename "$node_url")"
	node -v &>/dev/null || {
		mkdir -p "$node"
		cd "$(dirname "$node")"
		curl -L -O "$node_url"
		start "$node_filename"
		cd -
	}
}

EXTENSOES(){
	code --list-extensions --show-versions | grep -iq eamodio.gitlens || {
		code --install-extension eamodio.gitlens --force
	}

	code --list-extensions --show-versions | grep -iq angular.ng-template || {
		code --install-extension angular.ng-template --force
	}
}

PROJETO(){
	npx @angular/cli@14.1.2 new frontend
	# ? Would you like to add Angular routing? Yes
	# ? Which stylesheet format would you like to use? CSS

	cd frontend
	npm install @types/node@16 --save-dev

	npx ng generate module angular
	npx ng generate component angular

	npx ng generate module pessoa
	npx ng generate component pessoa

	npx ng generate module logradouro
	npx ng generate component logradouro
}

SERVIDOR(){
	npm install
	npx ng serve
}
