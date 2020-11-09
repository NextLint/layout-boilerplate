'use strict';

module.exports = {
  types: [
    { value: 'feat', name: 'feat:      Добавление нового функционала' },
    { value: 'fix', name: 'fix:       Исправление ошибок' },
    {
      value: 'perf',
      name: 'perf:      Изменения направленные на улучшение производительности',
    },
    { value: 'test', name: 'test:      Добавление тестов' },
    {
      value: 'build',
      name: 'build:     Сборка проекта или изменения внешних зависимостей',
    },
    {
      value: 'config',
      name: 'config:     Изменение параметров конфигурации проекта',
    },
  ],

  scopes: [
    { name: 'components' },
    { name: 'redux' },
    { name: 'theme' },
    { name: 'backend' },
  ],

  messages: {
    type: 'Какие изменения вы вносите?',
    scope: '\nВыберите изменяему область кода (опционально):',
    customScope: 'Укажите свою область:',
    subject: '\nОписание изменения в повелительном наклонении:\n',
    body:
      'Подробно опишите изменение (опционально). Используйте "|" для новой строки:\n',
    confirmCommit: 'Принять изменения?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: false,
  subjectLimit: 72,
};
