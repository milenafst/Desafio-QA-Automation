Feature: Feature: Desafio II - Frontend – Automação E2E DemoQA


  Scenario: Submeter o formulário com sucesso
    Given que acesso o site DemoQA
    When seleciono a opção Forms
    And acesso o Practice Form
    And preencho todo o formulário com dados aleatórios
    And submeto o formulário
    Then um popup de confirmação deve ser exibido
    And fecho o popup 

  Scenario: Abrir nova janela em Browser Windows
    Given que acesso o site DemoQA
    When seleciono a opção Alerts, Frame & Windows
    And acesso o submenu Browser Windows
    And clico no botão New Window
    Then uma nova janela deve ser aberta com a mensagem "This is a sample page"

  Scenario: Gerenciar registros na Web Tables
    Given que acesso o site DemoQA
    When seleciono a opção Elements
    And acesso o submenu Web Tables
    And crio um novo registro
    And edito o registro criado
    Then deleto o registro criado 

  Scenario: Controlar a Progress Bar
    Given que acesso o site DemoQA
    When seleciono a opção Widgets
    And acesso o submenu Progress Bar
    And inicio a progress bar e paro antes de 25%
    Then o valor da progress bar deve ser menor ou igual a 25%
    And continuo a progress bar até 100% e reseto

   Scenario: Ordenar elementos no Sortable
    Given que acesso o site DemoQA
    When seleciono a opção Interactions
    And acesso o submenu Sortable
    And organizo os itens em ordem crescente
    Then os itens devem estar em ordem crescente


