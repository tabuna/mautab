<?php namespace Mautab\Http\Requests;

use Sentry;

class ChangeUserRequest extends Request
{

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return Sentry::check();
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'email'    => 'required|max:255|email',
			'password' => 'required|max:255|min:8',
			'lang' => 'in:ru,en',
		];
	}

}
