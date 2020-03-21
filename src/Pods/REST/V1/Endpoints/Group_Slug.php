<?php

namespace Pods\REST\V1\Endpoints;

use WP_REST_Request;

class Group_Slug extends Group {

	/**
	 * {@inheritdoc}
	 *
	 * @since 2.8
	 */
	public $route = '/groups/%1$s';

	/**
	 * {@inheritdoc}
	 *
	 * @since 2.8
	 */
	public function READ_args() {
		return [
			'slug'           => [
				'type'        => 'string',
				'in'          => 'path',
				'description' => __( 'The slug', 'pods' ),
				'required'    => true,
			],
			'include_fields' => [
				'type'        => 'integer',
				'description' => __( 'Whether to include fields (default: off)', 'pods' ),
				'default'     => 0,
			],
		];
	}

	/**
	 * {@inheritdoc}
	 *
	 * @since 2.8
	 */
	public function get( WP_REST_Request $request ) {
		return $this->get_by_args( 'slug', 'name', $request );
	}

	/**
	 * {@inheritdoc}
	 *
	 * @since 2.8
	 */
	public function EDIT_args() {
		return [
			'slug'     => [
				'type'        => 'string',
				'in'          => 'path',
				'description' => __( 'The slug', 'pods' ),
				'required'    => true,
			],
			'new_name' => [
				'type'        => 'string',
				'description' => __( 'The new name of the Group', 'pods' ),
			],
			'label'    => [
				'type'        => 'string',
				'description' => __( 'The singular label of the Group', 'pods' ),
			],
			'args'     => [
				'required'     => false,
				'description'  => __( 'A list of additional options to save to the Group.', 'pods' ),
				'swagger_type' => 'array',
			],
		];
	}

	/**
	 * {@inheritdoc}
	 *
	 * @since 2.8
	 */
	public function update( WP_REST_Request $request ) {
		return $this->update_by_args( 'slug', 'name', $request );
	}

	/**
	 * {@inheritdoc}
	 *
	 * @since 2.8
	 */
	public function DELETE_args() {
		return [
			'slug' => [
				'type'        => 'string',
				'in'          => 'path',
				'description' => __( 'The slug', 'pods' ),
				'required'    => true,
			],
		];
	}

	/**
	 * {@inheritdoc}
	 *
	 * @since 2.8
	 */
	public function delete( WP_REST_Request $request ) {
		return $this->delete_by_args( 'slug', 'name', $request );
	}
}