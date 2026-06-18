Feature: login

	//Cenário: Login Válido
	Scenario: Valid Login										
		Given I am on the login page
		When I type my "teste.oi@gmail.com" and "testoi"
		Then I have a successful login

	//Cenário: Login Inválido
	Scenario: Invalid Login
		Given I am on the login page
		When I type my "teste.teste@gmail.com" and "password"
		Then I receive an error message 