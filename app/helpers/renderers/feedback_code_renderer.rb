class FeedbackCodeRenderer
  require 'json'

  def initialize(code, programming_language, messages, builder)
    @programming_language = programming_language
    @code = code
    @builder = builder
    @messages = messages
  end

  def parse
    line_formatter = Rouge::Formatters::HTML.new
    table_formatter = Rouge::Formatters::HTMLLineTable.new line_formatter, table_class: 'feedback-code-table highlighter-rouge'

    lexer = (Rouge::Lexer.find(@programming_language) || Rouge::Lexers::PlainText).new
    lexed_c = lexer.lex(@code)

    @builder << table_formatter.format(lexed_c)

    @builder.script(type: 'application/javascript', id: 'feedback-code-messages') do
      @builder << 'var messages = '
      @builder << @messages.map { |o| Hash[o.each_pair.to_a] }.to_json
      @builder << ';'

      @builder << 'var feedbackCodeTable = new window.dodona.feedbackCodeTableClass(messages);'
      @builder << 'console.log(feedbackCodeTable);'
    end
  end
end
