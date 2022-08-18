json.extract! annotation, :id, :line_nr, :annotation_text, :user_id, :submission_id, :created_at, :updated_at
if annotation.is_a?(Question)
  json.extract! annotation, :question_state
  json.newer_submission_url(annotation.newer_submission&.then { |s| submission_url(s) })
end

# add anonymous message if the annotation is anonymised
json.anonymous_message t('js.user_annotation.anonymous_message') if annotation.anonymous?(current_user)

json.rendered_markdown markdown(annotation.annotation_text)
json.submission_url submission_url(annotation.submission, format: :json)
json.url annotation_url(annotation, format: :json)
json.user do
  # hide reviewer name depending on evaluation and current user
  if annotation.anonymous?(current_user)
    json.name ''
    json.url ''
  else
    json.name annotation.user.full_name
    json.url user_url(annotation.user)
  end
end

json.last_updated_by do
  # hide reviewer name depending on evaluation and current user
  if annotation.anonymous?(current_user)
    json.name ''
    json.url ''
  else
    json.name annotation.last_updated_by.full_name
    json.url user_url(annotation.last_updated_by)
  end
end
json.permission do
  json.update policy(annotation).update?
  json.destroy policy(annotation).destroy?
  json.transition do
    Question.question_states.each_key do |state|
      json.set! state, policy(annotation).transition?(state)
    end
  end
end
json.released AnnotationPolicy.new(annotation.submission.user, annotation).show?
json.type annotation.type&.downcase
