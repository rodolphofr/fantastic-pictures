## AngularJS

Angular tem como foco a criação de Single Page Applications (SPA's), porém seu uso não é exclusivo para este tipo de aplicação. Uma SPA é aquela aplicação que não recarrega durante seu uso. No caso do Angular, há um sistema de rotas que funciona no lado do cliente capaz de carregar do servidor fragmentos de páginas, chamadas de partials (parciais). Esses fragmentos são inseridos na página principal da aplicação.

## Curiosidades:

<b>Como o Angular sabe qual diretiva aplicar primeiro?</b> Internamente, todas as diretivas do angular possuem a propriedade priority. Por exemplo,a diretiva ng-model possui a prioridade 1 enquanto a ng-model-options 0. A diretiva ng-repeat possui prioridade 1000. Diretivas com menor número de prioridade são aplicadas primeiro. Isso faz todo sentido, pois ng-model-options precisa ser aplicada antes de ng-model entrar em ação. É por isso que a ordem da diretiva no elemento da tag HTML não dita quem será aplicado primeiro, mas sim a prioridade.