Feature: Fluxo completo da BookStore
  Como um usuário do sistema
  Quero reservar livros
  Para gerenciar minha biblioteca

  Scenario: Criar usuário, autorizar e reservar livros
    Given que crio um novo usuário
    And gero um token de acesso
    And confirmo que o usuário está autorizado
    When consulto os livros disponíveis
    And reservo dois livros
    Then devo ver o usuário com os livros reservados
